<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <strong>ZVK Onder Den Toren Veulen</strong>
        <span>Sporthallen Borgloon &amp; Heers, België</span>
      </div>

      <nav class="site-footer__links" aria-label="Footer navigatie">
        <RouterLink v-for="item in navigationItems" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="site-footer__contact">
        <div class="site-footer__socials" aria-label="Sociale media">
          <a
            href="https://www.facebook.com/p/ZVK-Onder-Den-Toren-Veulen-61581038627597/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook van ZVK Onder Den Toren Veulen"
          >
            <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
              <path
                d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.2-1.5 1.5-1.5H16V5.1c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3V11H8.8v3h2.3v7h2.4Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/zvk_onderdentoren_veulen/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram van ZVK Onder Den Toren Veulen"
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              focusable="false"
              aria-hidden="true"
              class="site-footer__social-icon site-footer__social-icon--instagram"
            >
              <path
                d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.55 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p class="site-footer__copy">&copy; 2026 ZVK ODT</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { navigationItems } from '@/data/navigation';
</script>
