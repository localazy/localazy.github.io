<script setup lang="ts">
import { useData } from 'vitepress';
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
import { DefaultTheme } from 'vitepress/theme';
import { Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
import { computed, ComputedRef } from 'vue';
import LocItem from './LocItem.vue';

export interface LocItem extends Feature {
  og?: string;
}

export interface LocGroup {
  title: string;
  items: LocItem[];
  icon?: DefaultTheme.FeatureIcon;
}

const { frontmatter: fm } = useData();

const locList: ComputedRef<Record<string, LocGroup>> = computed(() => {
  return fm.value.locList;
});
</script>

<template>
  <div v-if="locList" class="loc-list">
    <template
      v-for="group in locList"
      :key="group.title"
    >
      <div class="container">
        <div class="group-title">
          <div v-if="typeof group.icon === 'object'" class="group-icon">
            <VPImage
              :image="group.icon"
              :alt="group.icon.alt"
              :height="group.icon.height || 36"
              :width="group.icon.width || 36"

            />
          </div>
          <div v-else-if="group.icon" class="group-icon" v-html="group.icon"></div>

          {{ group.title }}
        </div>
        <div class="items">
          <div
            v-for="item in group.items"
            :key="item.title"
            class="item grid-4"
          >
            <loc-item
              :icon="item.icon"
              :title="item.title"
              :details="item.details"
              :link="item.link"
              :link-text="item.linkText"
              :rel="item.rel"
              :target="item.target"
              :og="item.og"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.group-title {
  margin: 32px 0 16px;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.group-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 24px;
  margin-right: 8px;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-4 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-4 {
    width: calc(100% / 2);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
