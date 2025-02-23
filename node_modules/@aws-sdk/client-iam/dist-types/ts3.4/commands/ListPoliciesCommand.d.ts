import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListPoliciesCommandInput extends ListPoliciesRequest {}
export interface ListPoliciesCommandOutput
  extends ListPoliciesResponse,
    __MetadataBearer {}
declare const ListPoliciesCommand_base: {
  new (
    input: ListPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListPoliciesCommandInput,
    ListPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListPoliciesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListPoliciesCommandInput,
    ListPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListPoliciesCommand extends ListPoliciesCommand_base {
  protected static __types: {
    api: {
      input: ListPoliciesRequest;
      output: ListPoliciesResponse;
    };
    sdk: {
      input: ListPoliciesCommandInput;
      output: ListPoliciesCommandOutput;
    };
  };
}
