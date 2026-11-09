/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

/*
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */

import * as Common from './_common'
import * as Common_Mapping from './_common.mapping'
import * as Indices_Common from './indices._common'

export type ComponentTemplate = {
  component_template: ComponentTemplateNode;
  name: Common.Name;
}

export type ComponentTemplateNode = {
  _meta?: Common.Metadata;
  template: ComponentTemplateSummary;
  version?: Common.VersionNumber;
}

export type ComponentTemplateSummary = {
  _meta?: Common.Metadata;
  aliases?: Record<string, Indices_Common.AliasDefinition>;
  mappings?: Common_Mapping.TypeMapping;
  settings?: Record<string, Indices_Common.IndexSettings>;
  version?: Common.VersionNumber;
}

export type SettingMetadata = {
  default?: string;
  description?: string;
  dynamic: boolean;
  validation?: SettingValidation;
}

export type SettingValidation = {
  max?: string;
  min?: string;
  type: SettingValueType;
}

export type SettingValueType = 'boolean' | 'byte_size' | 'double' | 'float' | 'integer' | 'long' | 'memory_size' | 'time'

export type WaitForNodes = number | string

