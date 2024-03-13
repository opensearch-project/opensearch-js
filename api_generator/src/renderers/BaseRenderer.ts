import Mustache from 'mustache';
import fs from 'fs';
import path from 'path';

export default class BaseRenderer {
    protected templateFile: string = '';

    view(): Record<string, any> {
        throw 'Not implemented';
    }

    render(): string {
        const templatePath = path.join(__dirname, './templates', this.templateFile);
        const template = fs.readFileSync(templatePath, 'utf8');
        return Mustache.render(template, {...this.#commons(), ...this.view()});
    }

    outputPath(rootDir: string): string {
        throw 'Not implemented';
    }

    generateFile(rootDir: string): void {
        fs.writeFileSync(this.outputPath(rootDir), this.render());
    }

    #commons(): Record<string, any> {
        return {
            opensearch_license:
`/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */
`,
            elastic_license:
`/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
`,
            generated_code_warning:
`/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */`,
        }
    }
}