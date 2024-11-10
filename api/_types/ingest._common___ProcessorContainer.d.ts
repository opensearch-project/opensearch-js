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

import * as CommonScript from './_common___Script'
import * as Ingest_CommonAppendProcessor from './ingest._common___AppendProcessor'
import * as Ingest_CommonAttachmentProcessor from './ingest._common___AttachmentProcessor'
import * as Ingest_CommonBytesProcessor from './ingest._common___BytesProcessor'
import * as Ingest_CommonCircleProcessor from './ingest._common___CircleProcessor'
import * as Ingest_CommonConvertProcessor from './ingest._common___ConvertProcessor'
import * as Ingest_CommonCsvProcessor from './ingest._common___CsvProcessor'
import * as Ingest_CommonDateIndexNameProcessor from './ingest._common___DateIndexNameProcessor'
import * as Ingest_CommonDateProcessor from './ingest._common___DateProcessor'
import * as Ingest_CommonDissectProcessor from './ingest._common___DissectProcessor'
import * as Ingest_CommonDotExpanderProcessor from './ingest._common___DotExpanderProcessor'
import * as Ingest_CommonDropProcessor from './ingest._common___DropProcessor'
import * as Ingest_CommonEnrichProcessor from './ingest._common___EnrichProcessor'
import * as Ingest_CommonFailProcessor from './ingest._common___FailProcessor'
import * as Ingest_CommonForeachProcessor from './ingest._common___ForeachProcessor'
import * as Ingest_CommonGeoIpProcessor from './ingest._common___GeoIpProcessor'
import * as Ingest_CommonGrokProcessor from './ingest._common___GrokProcessor'
import * as Ingest_CommonGsubProcessor from './ingest._common___GsubProcessor'
import * as Ingest_CommonInferenceProcessor from './ingest._common___InferenceProcessor'
import * as Ingest_CommonJoinProcessor from './ingest._common___JoinProcessor'
import * as Ingest_CommonJsonProcessor from './ingest._common___JsonProcessor'
import * as Ingest_CommonKeyValueProcessor from './ingest._common___KeyValueProcessor'
import * as Ingest_CommonLowercaseProcessor from './ingest._common___LowercaseProcessor'
import * as Ingest_CommonPipelineProcessor from './ingest._common___PipelineProcessor'
import * as Ingest_CommonRemoveProcessor from './ingest._common___RemoveProcessor'
import * as Ingest_CommonRenameProcessor from './ingest._common___RenameProcessor'
import * as Ingest_CommonSetProcessor from './ingest._common___SetProcessor'
import * as Ingest_CommonSetSecurityUserProcessor from './ingest._common___SetSecurityUserProcessor'
import * as Ingest_CommonSortProcessor from './ingest._common___SortProcessor'
import * as Ingest_CommonSplitProcessor from './ingest._common___SplitProcessor'
import * as Ingest_CommonTextEmbeddingProcessor from './ingest._common___TextEmbeddingProcessor'
import * as Ingest_CommonTrimProcessor from './ingest._common___TrimProcessor'
import * as Ingest_CommonUppercaseProcessor from './ingest._common___UppercaseProcessor'
import * as Ingest_CommonUrlDecodeProcessor from './ingest._common___UrlDecodeProcessor'
import * as Ingest_CommonUserAgentProcessor from './ingest._common___UserAgentProcessor'

export type undefined = {
  append?: Ingest_CommonAppendProcessor.undefined;
  attachment?: Ingest_CommonAttachmentProcessor.undefined;
  bytes?: Ingest_CommonBytesProcessor.undefined;
  circle?: Ingest_CommonCircleProcessor.undefined;
  convert?: Ingest_CommonConvertProcessor.undefined;
  csv?: Ingest_CommonCsvProcessor.undefined;
  date?: Ingest_CommonDateProcessor.undefined;
  date_index_name?: Ingest_CommonDateIndexNameProcessor.undefined;
  dissect?: Ingest_CommonDissectProcessor.undefined;
  dot_expander?: Ingest_CommonDotExpanderProcessor.undefined;
  drop?: Ingest_CommonDropProcessor.undefined;
  enrich?: Ingest_CommonEnrichProcessor.undefined;
  fail?: Ingest_CommonFailProcessor.undefined;
  foreach?: Ingest_CommonForeachProcessor.undefined;
  geoip?: Ingest_CommonGeoIpProcessor.undefined;
  grok?: Ingest_CommonGrokProcessor.undefined;
  gsub?: Ingest_CommonGsubProcessor.undefined;
  inference?: Ingest_CommonInferenceProcessor.undefined;
  join?: Ingest_CommonJoinProcessor.undefined;
  json?: Ingest_CommonJsonProcessor.undefined;
  kv?: Ingest_CommonKeyValueProcessor.undefined;
  lowercase?: Ingest_CommonLowercaseProcessor.undefined;
  pipeline?: Ingest_CommonPipelineProcessor.undefined;
  remove?: Ingest_CommonRemoveProcessor.undefined;
  rename?: Ingest_CommonRenameProcessor.undefined;
  script?: CommonScript.undefined;
  set?: Ingest_CommonSetProcessor.undefined;
  set_security_user?: Ingest_CommonSetSecurityUserProcessor.undefined;
  sort?: Ingest_CommonSortProcessor.undefined;
  split?: Ingest_CommonSplitProcessor.undefined;
  text_embedding?: Ingest_CommonTextEmbeddingProcessor.undefined;
  trim?: Ingest_CommonTrimProcessor.undefined;
  uppercase?: Ingest_CommonUppercaseProcessor.undefined;
  urldecode?: Ingest_CommonUrlDecodeProcessor.undefined;
  user_agent?: Ingest_CommonUserAgentProcessor.undefined;
}

