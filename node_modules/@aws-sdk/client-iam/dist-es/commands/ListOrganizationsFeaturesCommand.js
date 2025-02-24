import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListOrganizationsFeaturesCommand, se_ListOrganizationsFeaturesCommand } from "../protocols/Aws_query";
export { $Command };
export class ListOrganizationsFeaturesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListOrganizationsFeatures", {})
    .n("IAMClient", "ListOrganizationsFeaturesCommand")
    .f(void 0, void 0)
    .ser(se_ListOrganizationsFeaturesCommand)
    .de(de_ListOrganizationsFeaturesCommand)
    .build() {
}
