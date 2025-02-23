import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface GetServiceLinkedRoleDeletionStatusCommandInput
  extends GetServiceLinkedRoleDeletionStatusRequest {}
export interface GetServiceLinkedRoleDeletionStatusCommandOutput
  extends GetServiceLinkedRoleDeletionStatusResponse,
    __MetadataBearer {}
declare const GetServiceLinkedRoleDeletionStatusCommand_base: {
  new (
    input: GetServiceLinkedRoleDeletionStatusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetServiceLinkedRoleDeletionStatusCommandInput,
    GetServiceLinkedRoleDeletionStatusCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetServiceLinkedRoleDeletionStatusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetServiceLinkedRoleDeletionStatusCommandInput,
    GetServiceLinkedRoleDeletionStatusCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetServiceLinkedRoleDeletionStatusCommand extends GetServiceLinkedRoleDeletionStatusCommand_base {
  protected static __types: {
    api: {
      input: GetServiceLinkedRoleDeletionStatusRequest;
      output: GetServiceLinkedRoleDeletionStatusResponse;
    };
    sdk: {
      input: GetServiceLinkedRoleDeletionStatusCommandInput;
      output: GetServiceLinkedRoleDeletionStatusCommandOutput;
    };
  };
}
