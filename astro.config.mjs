import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://piyushsinghoffice.github.io',
  base: '/rath-docs',
  integrations: [starlight({
    title: 'Rath',
    sidebar: [
      { label: 'Getting started', items: ['getting-started'] },
      { label: 'Everyday use', items: ['chatting', 'quick-ask-and-model-switching', 'terminal-and-ide-context', 'message-actions', 'dictation', 'slash-commands', 'editor-helpers', 'browser-actions', 'sessions', 'history-and-export', 'session-graph', 'memory', 'context', 'questions', 'reviewing-changes', 'commit-message', 'subagents', 'agents-window', 'apps-and-notes', 'cards-and-interfaces', 'workflow-helpers', 'automations', 'worktrees'] },
      { label: 'Safety and control', items: ['permissions', 'shell-safety', 'organisation-policy', 'provider-connections', 'notifications'] },
      { label: 'Extending Rath', items: ['command-line', 'tools-screen', 'customizing', 'appearance-and-themes', 'inline-completions', 'hooks', 'packages-and-plugins', 'mcp-servers'] },
      { label: 'Reference', items: ['commands-reference', 'models', 'troubleshooting', 'settings-reference', 'settings-general', 'settings-chat', 'settings-context', 'settings-tools', 'settings-features'] },
    ],
  })],
});
