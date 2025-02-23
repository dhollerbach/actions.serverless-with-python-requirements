import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListTrafficPoliciesRequest,
  ListTrafficPoliciesResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListTrafficPoliciesCommandInput
  extends ListTrafficPoliciesRequest {}
export interface ListTrafficPoliciesCommandOutput
  extends ListTrafficPoliciesResponse,
    __MetadataBearer {}
declare const ListTrafficPoliciesCommand_base: {
  new (
    input: ListTrafficPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListTrafficPoliciesCommandInput,
    ListTrafficPoliciesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListTrafficPoliciesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListTrafficPoliciesCommandInput,
    ListTrafficPoliciesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListTrafficPoliciesCommand extends ListTrafficPoliciesCommand_base {
  protected static __types: {
    api: {
      input: ListTrafficPoliciesRequest;
      output: ListTrafficPoliciesResponse;
    };
    sdk: {
      input: ListTrafficPoliciesCommandInput;
      output: ListTrafficPoliciesCommandOutput;
    };
  };
}
