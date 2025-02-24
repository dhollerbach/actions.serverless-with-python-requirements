import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { GetUserRequest, GetUserResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetUserCommandInput extends GetUserRequest {}
export interface GetUserCommandOutput
  extends GetUserResponse,
    __MetadataBearer {}
declare const GetUserCommand_base: {
  new (input: GetUserCommandInput): import("@smithy/smithy-client").CommandImpl<
    GetUserCommandInput,
    GetUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetUserCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetUserCommandInput,
    GetUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetUserCommand extends GetUserCommand_base {
  protected static __types: {
    api: {
      input: GetUserRequest;
      output: GetUserResponse;
    };
    sdk: {
      input: GetUserCommandInput;
      output: GetUserCommandOutput;
    };
  };
}
