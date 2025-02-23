import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetHealthCheckCountRequest,
  GetHealthCheckCountResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface GetHealthCheckCountCommandInput
  extends GetHealthCheckCountRequest {}
export interface GetHealthCheckCountCommandOutput
  extends GetHealthCheckCountResponse,
    __MetadataBearer {}
declare const GetHealthCheckCountCommand_base: {
  new (
    input: GetHealthCheckCountCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetHealthCheckCountCommandInput,
    GetHealthCheckCountCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetHealthCheckCountCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetHealthCheckCountCommandInput,
    GetHealthCheckCountCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetHealthCheckCountCommand extends GetHealthCheckCountCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GetHealthCheckCountResponse;
    };
    sdk: {
      input: GetHealthCheckCountCommandInput;
      output: GetHealthCheckCountCommandOutput;
    };
  };
}
