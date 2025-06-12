import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'personalBlogsProject',

  projectId: '0z26388c',
  dataset: 'production',
  studioHost: 'gurnish-singh',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
