import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListGroupsForUserRequest,
  ListGroupsForUserResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListGroupsForUserCommandInput
  extends ListGroupsForUserRequest {}
export interface ListGroupsForUserCommandOutput
  extends ListGroupsForUserResponse,
    __MetadataBearer {}
declare const ListGroupsForUserCommand_base: {
  new (
    input: ListGroupsForUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListGroupsForUserCommandInput,
    ListGroupsForUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: ListGroupsForUserCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListGroupsForUserCommandInput,
    ListGroupsForUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListGroupsForUserCommand extends ListGroupsForUserCommand_base {
  protected static __types: {
    api: {
      input: ListGroupsForUserRequest;
      output: ListGroupsForUserResponse;
    };
    sdk: {
      input: ListGroupsForUserCommandInput;
      output: ListGroupsForUserCommandOutput;
    };
  };
}
