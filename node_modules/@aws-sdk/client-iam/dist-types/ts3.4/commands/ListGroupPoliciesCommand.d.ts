import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListGroupPoliciesRequest,
  ListGroupPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListGroupPoliciesCommandInput
  extends ListGroupPoliciesRequest {}
export interface ListGroupPoliciesCommandOutput
  extends ListGroupPoliciesResponse,
    __MetadataBearer {}
declare const ListGroupPoliciesCommand_base: {
  new (
    input: ListGroupPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListGroupPoliciesCommandInput,
    ListGroupPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListGroupPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListGroupPoliciesCommandInput,
    ListGroupPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListGroupPoliciesCommand extends ListGroupPoliciesCommand_base {
  protected static __types: {
    api: {
      input: ListGroupPoliciesRequest;
      output: ListGroupPoliciesResponse;
    };
    sdk: {
      input: ListGroupPoliciesCommandInput;
      output: ListGroupPoliciesCommandOutput;
    };
  };
}
