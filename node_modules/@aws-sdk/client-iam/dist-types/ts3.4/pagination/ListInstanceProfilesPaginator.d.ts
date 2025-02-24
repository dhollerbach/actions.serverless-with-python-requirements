import { Paginator } from "@smithy/types";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListInstanceProfiles: (
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceProfilesCommandOutput>;
