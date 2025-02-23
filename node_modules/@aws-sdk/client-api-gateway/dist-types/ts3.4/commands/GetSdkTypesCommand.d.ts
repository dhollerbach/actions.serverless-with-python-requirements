import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { GetSdkTypesRequest, SdkTypes } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetSdkTypesCommandInput extends GetSdkTypesRequest {}
export interface GetSdkTypesCommandOutput extends SdkTypes, __MetadataBearer {}
declare const GetSdkTypesCommand_base: {
  new (
    input: GetSdkTypesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetSdkTypesCommandInput,
    GetSdkTypesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetSdkTypesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetSdkTypesCommandInput,
    GetSdkTypesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetSdkTypesCommand extends GetSdkTypesCommand_base {
  protected static __types: {
    api: {
      input: GetSdkTypesRequest;
      output: SdkTypes;
    };
    sdk: {
      input: GetSdkTypesCommandInput;
      output: GetSdkTypesCommandOutput;
    };
  };
}
