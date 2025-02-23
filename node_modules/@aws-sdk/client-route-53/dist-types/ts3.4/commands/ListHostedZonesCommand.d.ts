import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListHostedZonesRequest,
  ListHostedZonesResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListHostedZonesCommandInput extends ListHostedZonesRequest {}
export interface ListHostedZonesCommandOutput
  extends ListHostedZonesResponse,
    __MetadataBearer {}
declare const ListHostedZonesCommand_base: {
  new (
    input: ListHostedZonesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListHostedZonesCommandInput,
    ListHostedZonesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListHostedZonesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListHostedZonesCommandInput,
    ListHostedZonesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListHostedZonesCommand extends ListHostedZonesCommand_base {
  protected static __types: {
    api: {
      input: ListHostedZonesRequest;
      output: ListHostedZonesResponse;
    };
    sdk: {
      input: ListHostedZonesCommandInput;
      output: ListHostedZonesCommandOutput;
    };
  };
}
