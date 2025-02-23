import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { ApiKeys, GetApiKeysRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetApiKeysCommandInput extends GetApiKeysRequest {}
export interface GetApiKeysCommandOutput extends ApiKeys, __MetadataBearer {}
declare const GetApiKeysCommand_base: {
  new (
    input: GetApiKeysCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetApiKeysCommandInput,
    GetApiKeysCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetApiKeysCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetApiKeysCommandInput,
    GetApiKeysCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetApiKeysCommand extends GetApiKeysCommand_base {
  protected static __types: {
    api: {
      input: GetApiKeysRequest;
      output: ApiKeys;
    };
    sdk: {
      input: GetApiKeysCommandInput;
      output: GetApiKeysCommandOutput;
    };
  };
}
