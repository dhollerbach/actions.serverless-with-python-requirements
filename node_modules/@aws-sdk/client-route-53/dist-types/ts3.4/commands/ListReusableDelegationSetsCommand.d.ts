import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListReusableDelegationSetsRequest,
  ListReusableDelegationSetsResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListReusableDelegationSetsCommandInput
  extends ListReusableDelegationSetsRequest {}
export interface ListReusableDelegationSetsCommandOutput
  extends ListReusableDelegationSetsResponse,
    __MetadataBearer {}
declare const ListReusableDelegationSetsCommand_base: {
  new (
    input: ListReusableDelegationSetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListReusableDelegationSetsCommandInput,
    ListReusableDelegationSetsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListReusableDelegationSetsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListReusableDelegationSetsCommandInput,
    ListReusableDelegationSetsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListReusableDelegationSetsCommand extends ListReusableDelegationSetsCommand_base {
  protected static __types: {
    api: {
      input: ListReusableDelegationSetsRequest;
      output: ListReusableDelegationSetsResponse;
    };
    sdk: {
      input: ListReusableDelegationSetsCommandInput;
      output: ListReusableDelegationSetsCommandOutput;
    };
  };
}
