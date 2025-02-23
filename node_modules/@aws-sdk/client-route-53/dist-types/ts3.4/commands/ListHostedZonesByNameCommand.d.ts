import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListHostedZonesByNameRequest,
  ListHostedZonesByNameResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListHostedZonesByNameCommandInput
  extends ListHostedZonesByNameRequest {}
export interface ListHostedZonesByNameCommandOutput
  extends ListHostedZonesByNameResponse,
    __MetadataBearer {}
declare const ListHostedZonesByNameCommand_base: {
  new (
    input: ListHostedZonesByNameCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListHostedZonesByNameCommandInput,
    ListHostedZonesByNameCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListHostedZonesByNameCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListHostedZonesByNameCommandInput,
    ListHostedZonesByNameCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListHostedZonesByNameCommand extends ListHostedZonesByNameCommand_base {
  protected static __types: {
    api: {
      input: ListHostedZonesByNameRequest;
      output: ListHostedZonesByNameResponse;
    };
    sdk: {
      input: ListHostedZonesByNameCommandInput;
      output: ListHostedZonesByNameCommandOutput;
    };
  };
}
