/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import * as Common from './_common'
import * as Indices_Common from './indices._common'
import * as Common_Mapping from './_common.mapping'

export interface ComponentTemplate {
  component_template: ComponentTemplateNode;
  name: Common.Name;
}

export interface ComponentTemplateNode {
  _meta?: Common.Metadata;
  template: ComponentTemplateSummary;
  version?: Common.VersionNumber;
}

export interface ComponentTemplateSummary {
  _meta?: Common.Metadata;
  aliases?: Record<string, Indices_Common.AliasDefinition>;
  lifecycle?: Indices_Common.DataStreamLifecycleWithRollover;
  mappings?: Common_Mapping.TypeMapping;
  settings?: Record<string, Indices_Common.IndexSettings>;
  version?: Common.VersionNumber;
}

