import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeManagedLoginBrandingByClientRequestFilterSensitiveLog, } from "../models/models_0";
import { de_DescribeManagedLoginBrandingByClientCommand, se_DescribeManagedLoginBrandingByClientCommand, } from "../protocols/Aws_json1_1";
export { $Command };
export class DescribeManagedLoginBrandingByClientCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "DescribeManagedLoginBrandingByClient", {})
    .n("CognitoIdentityProviderClient", "DescribeManagedLoginBrandingByClientCommand")
    .f(DescribeManagedLoginBrandingByClientRequestFilterSensitiveLog, void 0)
    .ser(se_DescribeManagedLoginBrandingByClientCommand)
    .de(de_DescribeManagedLoginBrandingByClientCommand)
    .build() {
}
