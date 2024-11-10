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

import * as Common_AnalysisAsciiFoldingTokenFilter from './_common.analysis___AsciiFoldingTokenFilter'
import * as Common_AnalysisCommonGramsTokenFilter from './_common.analysis___CommonGramsTokenFilter'
import * as Common_AnalysisConditionTokenFilter from './_common.analysis___ConditionTokenFilter'
import * as Common_AnalysisDelimitedPayloadTokenFilter from './_common.analysis___DelimitedPayloadTokenFilter'
import * as Common_AnalysisDictionaryDecompounderTokenFilter from './_common.analysis___DictionaryDecompounderTokenFilter'
import * as Common_AnalysisEdgeNGramTokenFilter from './_common.analysis___EdgeNGramTokenFilter'
import * as Common_AnalysisElisionTokenFilter from './_common.analysis___ElisionTokenFilter'
import * as Common_AnalysisFingerprintTokenFilter from './_common.analysis___FingerprintTokenFilter'
import * as Common_AnalysisHunspellTokenFilter from './_common.analysis___HunspellTokenFilter'
import * as Common_AnalysisHyphenationDecompounderTokenFilter from './_common.analysis___HyphenationDecompounderTokenFilter'
import * as Common_AnalysisIcuCollationTokenFilter from './_common.analysis___IcuCollationTokenFilter'
import * as Common_AnalysisIcuFoldingTokenFilter from './_common.analysis___IcuFoldingTokenFilter'
import * as Common_AnalysisIcuNormalizationTokenFilter from './_common.analysis___IcuNormalizationTokenFilter'
import * as Common_AnalysisIcuTokenizer from './_common.analysis___IcuTokenizer'
import * as Common_AnalysisIcuTransformTokenFilter from './_common.analysis___IcuTransformTokenFilter'
import * as Common_AnalysisKeepTypesTokenFilter from './_common.analysis___KeepTypesTokenFilter'
import * as Common_AnalysisKeepWordsTokenFilter from './_common.analysis___KeepWordsTokenFilter'
import * as Common_AnalysisKeywordMarkerTokenFilter from './_common.analysis___KeywordMarkerTokenFilter'
import * as Common_AnalysisKStemTokenFilter from './_common.analysis___KStemTokenFilter'
import * as Common_AnalysisKuromojiPartOfSpeechTokenFilter from './_common.analysis___KuromojiPartOfSpeechTokenFilter'
import * as Common_AnalysisKuromojiReadingFormTokenFilter from './_common.analysis___KuromojiReadingFormTokenFilter'
import * as Common_AnalysisKuromojiStemmerTokenFilter from './_common.analysis___KuromojiStemmerTokenFilter'
import * as Common_AnalysisLengthTokenFilter from './_common.analysis___LengthTokenFilter'
import * as Common_AnalysisLimitTokenCountTokenFilter from './_common.analysis___LimitTokenCountTokenFilter'
import * as Common_AnalysisLowercaseTokenFilter from './_common.analysis___LowercaseTokenFilter'
import * as Common_AnalysisMultiplexerTokenFilter from './_common.analysis___MultiplexerTokenFilter'
import * as Common_AnalysisNGramTokenFilter from './_common.analysis___NGramTokenFilter'
import * as Common_AnalysisNoriPartOfSpeechTokenFilter from './_common.analysis___NoriPartOfSpeechTokenFilter'
import * as Common_AnalysisPatternCaptureTokenFilter from './_common.analysis___PatternCaptureTokenFilter'
import * as Common_AnalysisPatternReplaceTokenFilter from './_common.analysis___PatternReplaceTokenFilter'
import * as Common_AnalysisPersianStemTokenFilter from './_common.analysis___PersianStemTokenFilter'
import * as Common_AnalysisPhoneticTokenFilter from './_common.analysis___PhoneticTokenFilter'
import * as Common_AnalysisPorterStemTokenFilter from './_common.analysis___PorterStemTokenFilter'
import * as Common_AnalysisPredicateTokenFilter from './_common.analysis___PredicateTokenFilter'
import * as Common_AnalysisRemoveDuplicatesTokenFilter from './_common.analysis___RemoveDuplicatesTokenFilter'
import * as Common_AnalysisReverseTokenFilter from './_common.analysis___ReverseTokenFilter'
import * as Common_AnalysisShingleTokenFilter from './_common.analysis___ShingleTokenFilter'
import * as Common_AnalysisSmartcnStopTokenFilter from './_common.analysis___SmartcnStopTokenFilter'
import * as Common_AnalysisSnowballTokenFilter from './_common.analysis___SnowballTokenFilter'
import * as Common_AnalysisStemmerOverrideTokenFilter from './_common.analysis___StemmerOverrideTokenFilter'
import * as Common_AnalysisStemmerTokenFilter from './_common.analysis___StemmerTokenFilter'
import * as Common_AnalysisStopTokenFilter from './_common.analysis___StopTokenFilter'
import * as Common_AnalysisSynonymGraphTokenFilter from './_common.analysis___SynonymGraphTokenFilter'
import * as Common_AnalysisSynonymTokenFilter from './_common.analysis___SynonymTokenFilter'
import * as Common_AnalysisTrimTokenFilter from './_common.analysis___TrimTokenFilter'
import * as Common_AnalysisTruncateTokenFilter from './_common.analysis___TruncateTokenFilter'
import * as Common_AnalysisUniqueTokenFilter from './_common.analysis___UniqueTokenFilter'
import * as Common_AnalysisUppercaseTokenFilter from './_common.analysis___UppercaseTokenFilter'
import * as Common_AnalysisWordDelimiterGraphTokenFilter from './_common.analysis___WordDelimiterGraphTokenFilter'
import * as Common_AnalysisWordDelimiterTokenFilter from './_common.analysis___WordDelimiterTokenFilter'

export type undefined = Common_AnalysisAsciiFoldingTokenFilter.undefined | Common_AnalysisCommonGramsTokenFilter.undefined | Common_AnalysisConditionTokenFilter.undefined | Common_AnalysisDelimitedPayloadTokenFilter.undefined | Common_AnalysisEdgeNGramTokenFilter.undefined | Common_AnalysisElisionTokenFilter.undefined | Common_AnalysisFingerprintTokenFilter.undefined | Common_AnalysisHunspellTokenFilter.undefined | Common_AnalysisHyphenationDecompounderTokenFilter.undefined | Common_AnalysisKeepTypesTokenFilter.undefined | Common_AnalysisKeepWordsTokenFilter.undefined | Common_AnalysisKeywordMarkerTokenFilter.undefined | Common_AnalysisKStemTokenFilter.undefined | Common_AnalysisLengthTokenFilter.undefined | Common_AnalysisLimitTokenCountTokenFilter.undefined | Common_AnalysisLowercaseTokenFilter.undefined | Common_AnalysisMultiplexerTokenFilter.undefined | Common_AnalysisNGramTokenFilter.undefined | Common_AnalysisNoriPartOfSpeechTokenFilter.undefined | Common_AnalysisPatternCaptureTokenFilter.undefined | Common_AnalysisPatternReplaceTokenFilter.undefined | Common_AnalysisPersianStemTokenFilter.undefined | Common_AnalysisPorterStemTokenFilter.undefined | Common_AnalysisPredicateTokenFilter.undefined | Common_AnalysisRemoveDuplicatesTokenFilter.undefined | Common_AnalysisReverseTokenFilter.undefined | Common_AnalysisShingleTokenFilter.undefined | Common_AnalysisSnowballTokenFilter.undefined | Common_AnalysisStemmerOverrideTokenFilter.undefined | Common_AnalysisStemmerTokenFilter.undefined | Common_AnalysisStopTokenFilter.undefined | Common_AnalysisSynonymGraphTokenFilter.undefined | Common_AnalysisSynonymTokenFilter.undefined | Common_AnalysisTrimTokenFilter.undefined | Common_AnalysisTruncateTokenFilter.undefined | Common_AnalysisUniqueTokenFilter.undefined | Common_AnalysisUppercaseTokenFilter.undefined | Common_AnalysisWordDelimiterGraphTokenFilter.undefined | Common_AnalysisWordDelimiterTokenFilter.undefined | Common_AnalysisKuromojiStemmerTokenFilter.undefined | Common_AnalysisKuromojiReadingFormTokenFilter.undefined | Common_AnalysisKuromojiPartOfSpeechTokenFilter.undefined | Common_AnalysisIcuTokenizer.undefined | Common_AnalysisIcuCollationTokenFilter.undefined | Common_AnalysisIcuFoldingTokenFilter.undefined | Common_AnalysisIcuNormalizationTokenFilter.undefined | Common_AnalysisIcuTransformTokenFilter.undefined | Common_AnalysisPhoneticTokenFilter.undefined | Common_AnalysisDictionaryDecompounderTokenFilter.undefined | Common_AnalysisSmartcnStopTokenFilter.undefined

