import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListServerCertificatesRequest,
  ListServerCertificatesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListServerCertificatesCommandInput
  extends ListServerCertificatesRequest {}
export interface ListServerCertificatesCommandOutput
  extends ListServerCertificatesResponse,
    __MetadataBearer {}
declare const ListServerCertificatesCommand_base: {
  new (
    input: ListServerCertificatesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListServerCertificatesCommandInput,
    ListServerCertificatesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListServerCertificatesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListServerCertificatesCommandInput,
    ListServerCertificatesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListServerCertificatesCommand extends ListServerCertificatesCommand_base {
  protected static __types: {
    api: {
      input: ListServerCertificatesRequest;
      output: ListServerCertificatesResponse;
    };
    sdk: {
      input: ListServerCertificatesCommandInput;
      output: ListServerCertificatesCommandOutput;
    };
  };
}
