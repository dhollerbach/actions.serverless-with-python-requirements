import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListSSHPublicKeysRequest,
  ListSSHPublicKeysResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListSSHPublicKeysCommandInput
  extends ListSSHPublicKeysRequest {}
export interface ListSSHPublicKeysCommandOutput
  extends ListSSHPublicKeysResponse,
    __MetadataBearer {}
declare const ListSSHPublicKeysCommand_base: {
  new (
    input: ListSSHPublicKeysCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListSSHPublicKeysCommandInput,
    ListSSHPublicKeysCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListSSHPublicKeysCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListSSHPublicKeysCommandInput,
    ListSSHPublicKeysCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListSSHPublicKeysCommand extends ListSSHPublicKeysCommand_base {
  protected static __types: {
    api: {
      input: ListSSHPublicKeysRequest;
      output: ListSSHPublicKeysResponse;
    };
    sdk: {
      input: ListSSHPublicKeysCommandInput;
      output: ListSSHPublicKeysCommandOutput;
    };
  };
}
