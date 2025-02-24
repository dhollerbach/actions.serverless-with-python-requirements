import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetHostedZoneCountRequest,
  GetHostedZoneCountResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface GetHostedZoneCountCommandInput
  extends GetHostedZoneCountRequest {}
export interface GetHostedZoneCountCommandOutput
  extends GetHostedZoneCountResponse,
    __MetadataBearer {}
declare const GetHostedZoneCountCommand_base: {
  new (
    input: GetHostedZoneCountCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetHostedZoneCountCommandInput,
    GetHostedZoneCountCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetHostedZoneCountCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetHostedZoneCountCommandInput,
    GetHostedZoneCountCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetHostedZoneCountCommand extends GetHostedZoneCountCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GetHostedZoneCountResponse;
    };
    sdk: {
      input: GetHostedZoneCountCommandInput;
      output: GetHostedZoneCountCommandOutput;
    };
  };
}
