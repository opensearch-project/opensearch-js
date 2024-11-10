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

import * as Common_AnalysisPhoneticEncoder from './_common.analysis___PhoneticEncoder'
import * as Common_AnalysisPhoneticLanguage from './_common.analysis___PhoneticLanguage'
import * as Common_AnalysisPhoneticNameType from './_common.analysis___PhoneticNameType'
import * as Common_AnalysisPhoneticRuleType from './_common.analysis___PhoneticRuleType'
import * as Common_AnalysisTokenFilterBase from './_common.analysis___TokenFilterBase'

export type undefined = Common_AnalysisTokenFilterBase.undefined & {
  encoder: Common_AnalysisPhoneticEncoder.undefined;
  languageset: Common_AnalysisPhoneticLanguage.undefined[];
  max_code_len?: number;
  name_type: Common_AnalysisPhoneticNameType.undefined;
  replace?: boolean;
  rule_type: Common_AnalysisPhoneticRuleType.undefined;
  type: 'phonetic';
}

