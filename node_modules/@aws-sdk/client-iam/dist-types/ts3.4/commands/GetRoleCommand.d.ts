import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import { GetRoleRequest, GetRoleResponse } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetRoleCommandInput extends GetRoleRequest {}
export interface GetRoleCommandOutput
  extends GetRoleResponse,
    __MetadataBearer {}
declare const GetRoleCommand_base: {
  new (input: GetRoleCommandInput): import("@smithy/smithy-client").CommandImpl<
    GetRoleCommandInput,
    GetRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (__0_0: GetRoleCommandInput): import("@smithy/smithy-client").CommandImpl<
    GetRoleCommandInput,
    GetRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetRoleCommand extends GetRoleCommand_base {
  protected static __types: {
    api: {
      input: GetRoleRequest;
      output: GetRoleResponse;
    };
    sdk: {
      input: GetRoleCommandInput;
      output: GetRoleCommandOutput;
    };
  };
}
