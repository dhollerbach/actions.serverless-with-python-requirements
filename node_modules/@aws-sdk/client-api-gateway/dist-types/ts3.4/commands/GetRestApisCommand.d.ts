import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { GetRestApisRequest, RestApis } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetRestApisCommandInput extends GetRestApisRequest {}
export interface GetRestApisCommandOutput extends RestApis, __MetadataBearer {}
declare const GetRestApisCommand_base: {
  new (
    input: GetRestApisCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetRestApisCommandInput,
    GetRestApisCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetRestApisCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetRestApisCommandInput,
    GetRestApisCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetRestApisCommand extends GetRestApisCommand_base {
  protected static __types: {
    api: {
      input: GetRestApisRequest;
      output: RestApis;
    };
    sdk: {
      input: GetRestApisCommandInput;
      output: GetRestApisCommandOutput;
    };
  };
}
