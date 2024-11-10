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

import * as Ml_CommonLlm from './ml._common___LLM'
import * as Ml_CommonMemory from './ml._common___Memory'
import * as Ml_CommonParameters from './ml._common___Parameters'
import * as Ml_CommonToolItems from './ml._common___ToolItems'

export type undefined = {
  app_type?: string;
  description?: string;
  llm?: Ml_CommonLlm.undefined;
  memory?: Ml_CommonMemory.undefined;
  name: string;
  parameters?: Ml_CommonParameters.undefined;
  tools?: Ml_CommonToolItems.undefined[];
  type: string;
}

