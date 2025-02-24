import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  APIGatewayClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../APIGatewayClient";
import { GetUsagePlansRequest, UsagePlans } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetUsagePlansCommandInput extends GetUsagePlansRequest {}
export interface GetUsagePlansCommandOutput
  extends UsagePlans,
    __MetadataBearer {}
declare const GetUsagePlansCommand_base: {
  new (
    input: GetUsagePlansCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetUsagePlansCommandInput,
    GetUsagePlansCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetUsagePlansCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetUsagePlansCommandInput,
    GetUsagePlansCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetUsagePlansCommand extends GetUsagePlansCommand_base {
  protected static __types: {
    api: {
      input: GetUsagePlansRequest;
      output: UsagePlans;
    };
    sdk: {
      input: GetUsagePlansCommandInput;
      output: GetUsagePlansCommandOutput;
    };
  };
}
