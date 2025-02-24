import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListSigningCertificatesRequest,
  ListSigningCertificatesResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface ListSigningCertificatesCommandInput
  extends ListSigningCertificatesRequest {}
export interface ListSigningCertificatesCommandOutput
  extends ListSigningCertificatesResponse,
    __MetadataBearer {}
declare const ListSigningCertificatesCommand_base: {
  new (
    input: ListSigningCertificatesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListSigningCertificatesCommandInput,
    ListSigningCertificatesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListSigningCertificatesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListSigningCertificatesCommandInput,
    ListSigningCertificatesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListSigningCertificatesCommand extends ListSigningCertificatesCommand_base {
  protected static __types: {
    api: {
      input: ListSigningCertificatesRequest;
      output: ListSigningCertificatesResponse;
    };
    sdk: {
      input: ListSigningCertificatesCommandInput;
      output: ListSigningCertificatesCommandOutput;
    };
  };
}
