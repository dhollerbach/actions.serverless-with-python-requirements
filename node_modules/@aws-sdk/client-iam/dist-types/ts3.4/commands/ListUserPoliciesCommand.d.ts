import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListUserPoliciesRequest,
  ListUserPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListUserPoliciesCommandInput extends ListUserPoliciesRequest {}
export interface ListUserPoliciesCommandOutput
  extends ListUserPoliciesResponse,
    __MetadataBearer {}
declare const ListUserPoliciesCommand_base: {
  new (
    input: ListUserPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListUserPoliciesCommandInput,
    ListUserPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListUserPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListUserPoliciesCommandInput,
    ListUserPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListUserPoliciesCommand extends ListUserPoliciesCommand_base {
  protected static __types: {
    api: {
      input: ListUserPoliciesRequest;
      output: ListUserPoliciesResponse;
    };
    sdk: {
      input: ListUserPoliciesCommandInput;
      output: ListUserPoliciesCommandOutput;
    };
  };
}
