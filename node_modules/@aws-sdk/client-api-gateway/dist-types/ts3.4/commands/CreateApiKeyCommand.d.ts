import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { ApiKey, CreateApiKeyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateApiKeyCommandInput extends CreateApiKeyRequest {}
export interface CreateApiKeyCommandOutput extends ApiKey, __MetadataBearer {}
declare const CreateApiKeyCommand_base: {
  new (
    input: CreateApiKeyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateApiKeyCommandInput,
    CreateApiKeyCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [CreateApiKeyCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    CreateApiKeyCommandInput,
    CreateApiKeyCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateApiKeyCommand extends CreateApiKeyCommand_base {
  protected static __types: {
    api: {
      input: CreateApiKeyRequest;
      output: ApiKey;
    };
    sdk: {
      input: CreateApiKeyCommandInput;
      output: CreateApiKeyCommandOutput;
    };
  };
}
