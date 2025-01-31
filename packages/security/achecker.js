/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  ...require('@carbon/ibm-cloud-cognitive-core/accessibility-checker'),

  ruleArchive: '09March2023', // `security` fails '31March2023' deployment.
};
