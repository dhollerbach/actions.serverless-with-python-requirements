import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { ListTypesInput, ListTypesOutput } from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface ListTypesCommandInput extends ListTypesInput {}
export interface ListTypesCommandOutput
  extends ListTypesOutput,
    __MetadataBearer {}
declare const ListTypesCommand_base: {
  new (
    input: ListTypesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListTypesCommandInput,
    ListTypesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListTypesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListTypesCommandInput,
    ListTypesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListTypesCommand extends ListTypesCommand_base {
  protected static __types: {
    api: {
      input: ListTypesInput;
      output: ListTypesOutput;
    };
    sdk: {
      input: ListTypesCommandInput;
      output: ListTypesCommandOutput;
    };
  };
}
