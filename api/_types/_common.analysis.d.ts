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

export type Analyzer = CustomAnalyzer | FingerprintAnalyzer | KeywordAnalyzer | LanguageAnalyzer | NoriAnalyzer | PatternAnalyzer | SimpleAnalyzer | StandardAnalyzer | StopAnalyzer | WhitespaceAnalyzer | IcuAnalyzer | KuromojiAnalyzer | SnowballAnalyzer | DutchAnalyzer

export interface AsciiFoldingTokenFilter extends TokenFilterBase {
  preserve_original?: Common.Stringifiedboolean;
  type: 'asciifolding';
}

export type CharFilter = string | CharFilterDefinition

export interface CharFilterBase {
  version?: Common.VersionString;
}

export type CharFilterDefinition = HtmlStripCharFilter | MappingCharFilter | PatternReplaceCharFilter | IcuNormalizationCharFilter | KuromojiIterationMarkCharFilter

export interface CharGroupTokenizer extends TokenizerBase {
  max_token_length?: number;
  tokenize_on_chars: string[];
  type: 'char_group';
}

export interface CommonGramsTokenFilter extends TokenFilterBase {
  common_words?: string[];
  common_words_path?: string;
  ignore_case?: boolean;
  query_mode?: boolean;
  type: 'common_grams';
}

export interface CompoundWordTokenFilterBase extends TokenFilterBase {
  hyphenation_patterns_path?: string;
  max_subword_size?: number;
  min_subword_size?: number;
  min_word_size?: number;
  only_longest_match?: boolean;
  word_list?: string[];
  word_list_path?: string;
}

export interface ConditionTokenFilter extends TokenFilterBase {
  filter: string[];
  script: Common.Script;
  type: 'condition';
}

export interface CustomAnalyzer {
  char_filter?: string[];
  filter?: string[];
  position_increment_gap?: number;
  position_offset_gap?: number;
  tokenizer: string;
  type: 'custom';
}

export interface CustomNormalizer {
  char_filter?: string[];
  filter?: string[];
  type: 'custom';
}

export type DelimitedPayloadEncoding = 'float' | 'identity' | 'int'

export interface DelimitedPayloadTokenFilter extends TokenFilterBase {
  delimiter?: string;
  encoding?: DelimitedPayloadEncoding;
  type: 'delimited_payload';
}

export interface DictionaryDecompounderTokenFilter extends CompoundWordTokenFilterBase {
  type: 'dictionary_decompounder';
}

export interface DutchAnalyzer {
  stopwords?: StopWords;
  type: 'dutch';
}

export type EdgeNGramSide = 'back' | 'front'

export interface EdgeNGramTokenFilter extends TokenFilterBase {
  max_gram?: number;
  min_gram?: number;
  preserve_original?: Common.Stringifiedboolean;
  side?: EdgeNGramSide;
  type: 'edge_ngram';
}

export interface EdgeNGramTokenizer extends TokenizerBase {
  custom_token_chars?: string;
  max_gram: number;
  min_gram: number;
  token_chars: TokenChar[];
  type: 'edge_ngram';
}

export interface ElisionTokenFilter extends TokenFilterBase {
  articles?: string[];
  articles_case?: Common.Stringifiedboolean;
  articles_path?: string;
  type: 'elision';
}

export interface FingerprintAnalyzer {
  max_output_size: number;
  preserve_original: boolean;
  separator: string;
  stopwords?: StopWords;
  stopwords_path?: string;
  type: 'fingerprint';
  version?: Common.VersionString;
}

export interface FingerprintTokenFilter extends TokenFilterBase {
  max_output_size?: number;
  separator?: string;
  type: 'fingerprint';
}

export interface HtmlStripCharFilter extends CharFilterBase {
  type: 'html_strip';
}

export interface HunspellTokenFilter extends TokenFilterBase {
  dedup?: boolean;
  dictionary?: string;
  locale: string;
  longest_only?: boolean;
  type: 'hunspell';
}

export interface HyphenationDecompounderTokenFilter extends CompoundWordTokenFilterBase {
  type: 'hyphenation_decompounder';
}

export interface IcuAnalyzer {
  method: IcuNormalizationType;
  mode: IcuNormalizationMode;
  type: 'icu_analyzer';
}

export type IcuCollationAlternate = 'non-ignorable' | 'shifted'

export type IcuCollationCaseFirst = 'lower' | 'upper'

export type IcuCollationDecomposition = 'identical' | 'no'

export type IcuCollationStrength = 'identical' | 'primary' | 'quaternary' | 'secondary' | 'tertiary'

export interface IcuCollationTokenFilter extends TokenFilterBase {
  alternate?: IcuCollationAlternate;
  caseFirst?: IcuCollationCaseFirst;
  caseLevel?: boolean;
  country?: string;
  decomposition?: IcuCollationDecomposition;
  hiraganaQuaternaryMode?: boolean;
  language?: string;
  numeric?: boolean;
  rules?: string;
  strength?: IcuCollationStrength;
  type: 'icu_collation';
  variableTop?: string;
  variant?: string;
}

export interface IcuFoldingTokenFilter extends TokenFilterBase {
  type: 'icu_folding';
  unicode_set_filter: string;
}

export interface IcuNormalizationCharFilter extends CharFilterBase {
  mode?: IcuNormalizationMode;
  name?: IcuNormalizationType;
  type: 'icu_normalizer';
}

export type IcuNormalizationMode = 'compose' | 'decompose'

export interface IcuNormalizationTokenFilter extends TokenFilterBase {
  name: IcuNormalizationType;
  type: 'icu_normalizer';
}

export type IcuNormalizationType = 'nfc' | 'nfkc' | 'nfkc_cf'

export interface IcuTokenizer extends TokenizerBase {
  rule_files: string;
  type: 'icu_tokenizer';
}

export type IcuTransformDirection = 'forward' | 'reverse'

export interface IcuTransformTokenFilter extends TokenFilterBase {
  dir?: IcuTransformDirection;
  id: string;
  type: 'icu_transform';
}

export type KeepTypesMode = 'exclude' | 'include'

export interface KeepTypesTokenFilter extends TokenFilterBase {
  mode?: KeepTypesMode;
  type: 'keep_types';
  types?: string[];
}

export interface KeepWordsTokenFilter extends TokenFilterBase {
  keep_words?: string[];
  keep_words_case?: boolean;
  keep_words_path?: string;
  type: 'keep';
}

export interface KeywordAnalyzer {
  type: 'keyword';
  version?: Common.VersionString;
}

export interface KeywordMarkerTokenFilter extends TokenFilterBase {
  ignore_case?: boolean;
  keywords?: string[];
  keywords_path?: string;
  keywords_pattern?: string;
  type: 'keyword_marker';
}

export interface KeywordTokenizer extends TokenizerBase {
  buffer_size: number;
  type: 'keyword';
}

export interface KStemTokenFilter extends TokenFilterBase {
  type: 'kstem';
}

export interface KuromojiAnalyzer {
  mode: KuromojiTokenizationMode;
  type: 'kuromoji';
  user_dictionary?: string;
}

export interface KuromojiIterationMarkCharFilter extends CharFilterBase {
  normalize_kana: boolean;
  normalize_kanji: boolean;
  type: 'kuromoji_iteration_mark';
}

export interface KuromojiPartOfSpeechTokenFilter extends TokenFilterBase {
  stoptags: string[];
  type: 'kuromoji_part_of_speech';
}

export interface KuromojiReadingFormTokenFilter extends TokenFilterBase {
  type: 'kuromoji_readingform';
  use_romaji: boolean;
}

export interface KuromojiStemmerTokenFilter extends TokenFilterBase {
  minimum_length: number;
  type: 'kuromoji_stemmer';
}

export type KuromojiTokenizationMode = 'extended' | 'normal' | 'search'

export interface KuromojiTokenizer extends TokenizerBase {
  discard_compound_token?: boolean;
  discard_punctuation?: boolean;
  mode: KuromojiTokenizationMode;
  nbest_cost?: number;
  nbest_examples?: string;
  type: 'kuromoji_tokenizer';
  user_dictionary?: string;
  user_dictionary_rules?: string[];
}

export type Language = 'Arabic' | 'Armenian' | 'Basque' | 'Brazilian' | 'Bulgarian' | 'Catalan' | 'Chinese' | 'Cjk' | 'Czech' | 'Danish' | 'Dutch' | 'English' | 'Estonian' | 'Finnish' | 'French' | 'Galician' | 'German' | 'Greek' | 'Hindi' | 'Hungarian' | 'Indonesian' | 'Irish' | 'Italian' | 'Latvian' | 'Norwegian' | 'Persian' | 'Portuguese' | 'Romanian' | 'Russian' | 'Sorani' | 'Spanish' | 'Swedish' | 'Thai' | 'Turkish'

export interface LanguageAnalyzer {
  language: Language;
  stem_exclusion: string[];
  stopwords?: StopWords;
  stopwords_path?: string;
  type: 'language';
  version?: Common.VersionString;
}

export interface LengthTokenFilter extends TokenFilterBase {
  max?: number;
  min?: number;
  type: 'length';
}

export interface LetterTokenizer extends TokenizerBase {
  type: 'letter';
}

export interface LimitTokenCountTokenFilter extends TokenFilterBase {
  consume_all_tokens?: boolean;
  max_token_count?: Common.Stringifiedinteger;
  type: 'limit';
}

export interface LowercaseNormalizer {
  type: 'lowercase';
}

export interface LowercaseTokenFilter extends TokenFilterBase {
  language?: string;
  type: 'lowercase';
}

export interface LowercaseTokenizer extends TokenizerBase {
  type: 'lowercase';
}

export interface MappingCharFilter extends CharFilterBase {
  mappings?: string[];
  mappings_path?: string;
  type: 'mapping';
}

export interface MultiplexerTokenFilter extends TokenFilterBase {
  filters: string[];
  preserve_original?: Common.Stringifiedboolean;
  type: 'multiplexer';
}

export interface NGramTokenFilter extends TokenFilterBase {
  max_gram?: number;
  min_gram?: number;
  preserve_original?: Common.Stringifiedboolean;
  type: 'ngram';
}

export interface NGramTokenizer extends TokenizerBase {
  custom_token_chars?: string;
  max_gram: number;
  min_gram: number;
  token_chars: TokenChar[];
  type: 'ngram';
}

export interface NoriAnalyzer {
  decompound_mode?: NoriDecompoundMode;
  stoptags?: string[];
  type: 'nori';
  user_dictionary?: string;
  version?: Common.VersionString;
}

export type NoriDecompoundMode = 'discard' | 'mixed' | 'none'

export interface NoriPartOfSpeechTokenFilter extends TokenFilterBase {
  stoptags?: string[];
  type: 'nori_part_of_speech';
}

export interface NoriTokenizer extends TokenizerBase {
  decompound_mode?: NoriDecompoundMode;
  discard_punctuation?: boolean;
  type: 'nori_tokenizer';
  user_dictionary?: string;
  user_dictionary_rules?: string[];
}

export type Normalizer = LowercaseNormalizer | CustomNormalizer

export interface PathHierarchyTokenizer extends TokenizerBase {
  buffer_size: Common.Stringifiedinteger;
  delimiter: string;
  replacement?: string;
  reverse: Common.Stringifiedboolean;
  skip: Common.Stringifiedinteger;
  type: 'path_hierarchy';
}

export interface PatternAnalyzer {
  flags?: string;
  lowercase?: boolean;
  pattern: string;
  stopwords?: StopWords;
  type: 'pattern';
  version?: Common.VersionString;
}

export interface PatternCaptureTokenFilter extends TokenFilterBase {
  patterns: string[];
  preserve_original?: Common.Stringifiedboolean;
  type: 'pattern_capture';
}

export interface PatternReplaceCharFilter extends CharFilterBase {
  flags?: string;
  pattern: string;
  replacement?: string;
  type: 'pattern_replace';
}

export interface PatternReplaceTokenFilter extends TokenFilterBase {
  all?: boolean;
  flags?: string;
  pattern: string;
  replacement?: string;
  type: 'pattern_replace';
}

export interface PatternTokenizer extends TokenizerBase {
  flags?: string;
  group?: number;
  pattern?: string;
  type: 'pattern';
}

export type PhoneticEncoder = 'beider_morse' | 'caverphone1' | 'caverphone2' | 'cologne' | 'daitch_mokotoff' | 'double_metaphone' | 'haasephonetik' | 'koelnerphonetik' | 'metaphone' | 'nysiis' | 'refined_soundex' | 'soundex'

export type PhoneticLanguage = 'any' | 'common' | 'cyrillic' | 'english' | 'french' | 'german' | 'hebrew' | 'hungarian' | 'polish' | 'romanian' | 'russian' | 'spanish'

export type PhoneticNameType = 'ashkenazi' | 'generic' | 'sephardic'

export type PhoneticRuleType = 'approx' | 'exact'

export interface PhoneticTokenFilter extends TokenFilterBase {
  encoder: PhoneticEncoder;
  languageset: PhoneticLanguage[];
  max_code_len?: number;
  name_type: PhoneticNameType;
  replace?: boolean;
  rule_type: PhoneticRuleType;
  type: 'phonetic';
}

export interface PorterStemTokenFilter extends TokenFilterBase {
  type: 'porter_stem';
}

export interface PredicateTokenFilter extends TokenFilterBase {
  script: Common.Script;
  type: 'predicate_token_filter';
}

export interface RemoveDuplicatesTokenFilter extends TokenFilterBase {
  type: 'remove_duplicates';
}

export interface ReverseTokenFilter extends TokenFilterBase {
  type: 'reverse';
}

export interface ShingleTokenFilter extends TokenFilterBase {
  filler_token?: string;
  max_shingle_size?: number | string;
  min_shingle_size?: number | string;
  output_unigrams?: boolean;
  output_unigrams_if_no_shingles?: boolean;
  token_separator?: string;
  type: 'shingle';
}

export interface SimpleAnalyzer {
  type: 'simple';
  version?: Common.VersionString;
}

export interface SnowballAnalyzer {
  language: SnowballLanguage;
  stopwords?: StopWords;
  type: 'snowball';
  version?: Common.VersionString;
}

export type SnowballLanguage = 'Armenian' | 'Basque' | 'Catalan' | 'Danish' | 'Dutch' | 'English' | 'Finnish' | 'French' | 'German' | 'German2' | 'Hungarian' | 'Italian' | 'Kp' | 'Lovins' | 'Norwegian' | 'Porter' | 'Portuguese' | 'Romanian' | 'Russian' | 'Spanish' | 'Swedish' | 'Turkish'

export interface SnowballTokenFilter extends TokenFilterBase {
  language: SnowballLanguage;
  type: 'snowball';
}

export interface StandardAnalyzer {
  max_token_length?: number;
  stopwords?: StopWords;
  type: 'standard';
}

export interface StandardTokenizer extends TokenizerBase {
  max_token_length?: number;
  type: 'standard';
}

export interface StemmerOverrideTokenFilter extends TokenFilterBase {
  rules?: string[];
  rules_path?: string;
  type: 'stemmer_override';
}

export interface StemmerTokenFilter extends TokenFilterBase {
  language?: string;
  type: 'stemmer';
}

export interface StopAnalyzer {
  stopwords?: StopWords;
  stopwords_path?: string;
  type: 'stop';
  version?: Common.VersionString;
}

export interface StopTokenFilter extends TokenFilterBase {
  ignore_case?: boolean;
  remove_trailing?: boolean;
  stopwords?: StopWords;
  stopwords_path?: string;
  type: 'stop';
}

export type StopWords = string | string[]

export type SynonymFormat = 'solr' | 'wordnet'

export interface SynonymGraphTokenFilter extends TokenFilterBase {
  expand?: boolean;
  format?: SynonymFormat;
  lenient?: boolean;
  synonyms?: string[];
  synonyms_path?: string;
  tokenizer?: string;
  type: 'synonym_graph';
  updateable?: boolean;
}

export interface SynonymTokenFilter extends TokenFilterBase {
  expand?: boolean;
  format?: SynonymFormat;
  lenient?: boolean;
  synonyms?: string[];
  synonyms_path?: string;
  tokenizer?: string;
  type: 'synonym';
  updateable?: boolean;
}

export type TokenChar = 'custom' | 'digit' | 'letter' | 'punctuation' | 'symbol' | 'whitespace'

export type TokenFilter = string | TokenFilterDefinition

export interface TokenFilterBase {
  version?: Common.VersionString;
}

export type TokenFilterDefinition = AsciiFoldingTokenFilter | CommonGramsTokenFilter | ConditionTokenFilter | DelimitedPayloadTokenFilter | EdgeNGramTokenFilter | ElisionTokenFilter | FingerprintTokenFilter | HunspellTokenFilter | HyphenationDecompounderTokenFilter | KeepTypesTokenFilter | KeepWordsTokenFilter | KeywordMarkerTokenFilter | KStemTokenFilter | LengthTokenFilter | LimitTokenCountTokenFilter | LowercaseTokenFilter | MultiplexerTokenFilter | NGramTokenFilter | NoriPartOfSpeechTokenFilter | PatternCaptureTokenFilter | PatternReplaceTokenFilter | PorterStemTokenFilter | PredicateTokenFilter | RemoveDuplicatesTokenFilter | ReverseTokenFilter | ShingleTokenFilter | SnowballTokenFilter | StemmerOverrideTokenFilter | StemmerTokenFilter | StopTokenFilter | SynonymGraphTokenFilter | SynonymTokenFilter | TrimTokenFilter | TruncateTokenFilter | UniqueTokenFilter | UppercaseTokenFilter | WordDelimiterGraphTokenFilter | WordDelimiterTokenFilter | KuromojiStemmerTokenFilter | KuromojiReadingFormTokenFilter | KuromojiPartOfSpeechTokenFilter | IcuTokenizer | IcuCollationTokenFilter | IcuFoldingTokenFilter | IcuNormalizationTokenFilter | IcuTransformTokenFilter | PhoneticTokenFilter | DictionaryDecompounderTokenFilter

export type Tokenizer = string | TokenizerDefinition

export interface TokenizerBase {
  version?: Common.VersionString;
}

export type TokenizerDefinition = CharGroupTokenizer | EdgeNGramTokenizer | KeywordTokenizer | LetterTokenizer | LowercaseTokenizer | NGramTokenizer | NoriTokenizer | PathHierarchyTokenizer | StandardTokenizer | UaxEmailUrlTokenizer | WhitespaceTokenizer | KuromojiTokenizer | PatternTokenizer | IcuTokenizer

export interface TrimTokenFilter extends TokenFilterBase {
  type: 'trim';
}

export interface TruncateTokenFilter extends TokenFilterBase {
  length?: number;
  type: 'truncate';
}

export interface UaxEmailUrlTokenizer extends TokenizerBase {
  max_token_length?: number;
  type: 'uax_url_email';
}

export interface UniqueTokenFilter extends TokenFilterBase {
  only_on_same_position?: boolean;
  type: 'unique';
}

export interface UppercaseTokenFilter extends TokenFilterBase {
  type: 'uppercase';
}

export interface WhitespaceAnalyzer {
  type: 'whitespace';
  version?: Common.VersionString;
}

export interface WhitespaceTokenizer extends TokenizerBase {
  max_token_length?: number;
  type: 'whitespace';
}

export interface WordDelimiterGraphTokenFilter extends TokenFilterBase {
  adjust_offsets?: boolean;
  catenate_all?: boolean;
  catenate_numbers?: boolean;
  catenate_words?: boolean;
  generate_number_parts?: boolean;
  generate_word_parts?: boolean;
  ignore_keywords?: boolean;
  preserve_original?: Common.Stringifiedboolean;
  protected_words?: string[];
  protected_words_path?: string;
  split_on_case_change?: boolean;
  split_on_numerics?: boolean;
  stem_english_possessive?: boolean;
  type: 'word_delimiter_graph';
  type_table?: string[];
  type_table_path?: string;
}

export interface WordDelimiterTokenFilter extends TokenFilterBase {
  catenate_all?: boolean;
  catenate_numbers?: boolean;
  catenate_words?: boolean;
  generate_number_parts?: boolean;
  generate_word_parts?: boolean;
  preserve_original?: Common.Stringifiedboolean;
  protected_words?: string[];
  protected_words_path?: string;
  split_on_case_change?: boolean;
  split_on_numerics?: boolean;
  stem_english_possessive?: boolean;
  type: 'word_delimiter';
  type_table?: string[];
  type_table_path?: string;
}

