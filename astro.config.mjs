import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://piyushsinghoffice.github.io',
  base: '/rath-docs',
  integrations: [starlight({
    title: 'Rath',
    sidebar: [
      { label: 'Getting started', items: ['getting-started'] },
      { label: 'Everyday use', items: ['chatting', 'editor-helpers', 'browser-actions', 'sessions', 'history-and-export', 'memory', 'context', 'questions', 'reviewing-changes', 'subagents', 'agents-window', 'apps-and-notes', 'cards-and-interfaces', 'workflow-helpers', 'automations', 'worktrees'] },
      { label: 'Safety and control', items: ['permissions', 'shell-safety', 'organisation-policy', 'provider-connections'] },
      { label: 'Extending Rath', items: ['command-line', 'tools-screen', 'customizing', 'inline-completions', 'hooks', 'packages-and-plugins', 'mcp-servers'] },
      { label: 'Reference', items: ['models', 'troubleshooting', 'settings-reference', 'settings-general', 'settings-chat', 'settings-context', 'settings-tools', 'settings-features'] },
    ],
  })],
});
