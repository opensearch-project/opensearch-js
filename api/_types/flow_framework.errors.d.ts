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


export interface BadRequestError {
  error?: string;
  status?: number;
}

export type ConflictError = Record<string, any>

export interface DeprovisioningError {
  error: string;
}

export interface DeprovisioningForbiddenError {
  error: string;
}

export interface DuplicateKeyError {
  error?: string;
  status?: number;
}

export type FlowFrameworkAPIDisabledError = Record<string, any>

export type InvalidParameterError = Record<string, any>

export interface InvalidRequestBodyFieldError {
  error?: string;
  status?: number;
}

export type InvalidTemplateVersionError = Record<string, any>

export type MaxWorkflowsLimitError = Record<string, any>

export type MissingParameterError = Record<string, any>

export type ParameterConflictError = Record<string, any>

export interface RequestBodyParsingFailedError {
  error?: string;
  status?: number;
}

export interface RequestTimeoutError {
  error?: string;
  status?: number;
}

export interface TemplateNameRequiredError {
  error?: string;
}

export type TemplateNotFoundError = Record<string, any>

export type UnsupportedFieldUpdateError = Record<string, any>

export type WorkFlowIdNullError = Record<string, any>

export type WorkflowParsingError = Record<string, any>

export type WorkflowSaveError = Record<string, any>

export type WorkflowStepsRetrieveError = Record<string, any>

