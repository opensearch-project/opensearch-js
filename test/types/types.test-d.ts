/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import { expectAssignable } from 'tsd';
import { MappingProperty } from '../../api/types';

// https://github.com/opensearch-project/opensearch-js/issues/703
// only manifested when value is in a variable, so the following would *not* catch it:
//
// expectAssignable<MappingProperty>({ type: 'date' });

const x = { type: 'date' };
expectAssignable<MappingProperty>(x);
