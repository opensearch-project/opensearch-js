import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import licenseHeader from 'eslint-plugin-license-header'

// mimic CommonJS variables -- not needed if using CommonJS
const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
const compat = new FlatCompat({ baseDirectory: _dirname, recommendedConfig: pluginJs.configs.recommended })

export default [
  pluginJs.configs.recommended,
  ...compat.extends('standard-with-typescript'),
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      'license-header': licenseHeader
    },
    rules: {
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/naming-convention': ['error',
        { selector: 'classProperty', modifiers: ['static', 'readonly'], format: ['UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'memberLike', modifiers: ['public'], format: ['snake_case'], leadingUnderscore: 'forbid' },
        { selector: 'memberLike', modifiers: ['private', 'protected'], format: ['snake_case'], leadingUnderscore: 'require' },
        { selector: 'variableLike', format: ['snake_case', 'UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'objectLiteralProperty', format: null },
        { selector: 'typeProperty', format: null }
      ],
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/strict-boolean-expressions': ['error',
        {
          allowString: true,
          allowNumber: true,
          allowNullableObject: true,
          allowNullableBoolean: true,
          allowNullableString: false,
          allowNullableNumber: false,
          allowNullableEnum: false,
          allowAny: false,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
        }
      ],
      'array-callback-return': 'off',
      'new-cap': 'off',
      'no-return-assign': 'error',
      'object-shorthand': 'error',
      'license-header/header': [
        'error',
        [
          '/*',
          ' * Copyright OpenSearch Contributors',
          ' * SPDX-License-Identifier: Apache-2.0',
          ' *',
          ' * The OpenSearch Contributors require contributions made to',
          ' * this file be licensed under the Apache-2.0 license or a',
          ' * compatible open source license.',
          ' *',
          ' */'
        ]
      ]
    }
  }
]
