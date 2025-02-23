import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  CreateAccessKeyRequest,
  CreateAccessKeyResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateAccessKeyCommandInput extends CreateAccessKeyRequest {}
export interface CreateAccessKeyCommandOutput
  extends CreateAccessKeyResponse,
    __MetadataBearer {}
declare const CreateAccessKeyCommand_base: {
  new (
    input: CreateAccessKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateAccessKeyCommandInput,
    CreateAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [CreateAccessKeyCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    CreateAccessKeyCommandInput,
    CreateAccessKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateAccessKeyCommand extends CreateAccessKeyCommand_base {
  protected static __types: {
    api: {
      input: CreateAccessKeyRequest;
      output: CreateAccessKeyResponse;
    };
    sdk: {
      input: CreateAccessKeyCommandInput;
      output: CreateAccessKeyCommandOutput;
    };
  };
}
