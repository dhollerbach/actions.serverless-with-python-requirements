import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetCheckerIpRangesRequest,
  GetCheckerIpRangesResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface GetCheckerIpRangesCommandInput
  extends GetCheckerIpRangesRequest {}
export interface GetCheckerIpRangesCommandOutput
  extends GetCheckerIpRangesResponse,
    __MetadataBearer {}
declare const GetCheckerIpRangesCommand_base: {
  new (
    input: GetCheckerIpRangesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCheckerIpRangesCommandInput,
    GetCheckerIpRangesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetCheckerIpRangesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetCheckerIpRangesCommandInput,
    GetCheckerIpRangesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetCheckerIpRangesCommand extends GetCheckerIpRangesCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GetCheckerIpRangesResponse;
    };
    sdk: {
      input: GetCheckerIpRangesCommandInput;
      output: GetCheckerIpRangesCommandOutput;
    };
  };
}
