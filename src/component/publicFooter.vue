<template>
  <div class="publicFooter">
    <div class="publicFooter_content">
      <ul>
        <li class="publicFooter_content_Li">
          <p>Risk Warning</p>
          <div>
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. xx% of retail investor accounts lose
            money when trading CFDs with this provider. You should consider
            whether you understand how CFDs work and whether you can afford to
            take the high risk of losing your money.
          </div>
        </li>
        <li class="publicFooter_content_Li">
          <p>Disclaimer</p>
          <div>
            The information on this site is not directed nor is intended for
            distribution to, or use by, any person in any country or
            jurisdiction where such distribution or use would be contrary to
            local laws or regulations. Such residents and countries include, but
            are not limited to, the United States, Canada, Belgium, Japan, or
            any country or jurisdiction where such distribution or use is
            prohibited. Apple, the Apple logo, iPod, iPad, iPod touch, and
            iTunes are trademarks of Apple Inc. registered in the US and other
            countries. iPhone is a trademark of Apple Inc. AppStore is a service
            mark of Apple Inc.
          </div>
        </li>
        <li class="publicFooter_content_Li">
          <p>TigerBrokers</p>
          <div>
            TigerBroker Limited is a company registered in England, company
            registration number 00000000. TigerBrokers is authorised and
            regulated by the Financial Conduct Authority (FRN：470325).Registered address: xxxxxxxxxxx
            <!-- ,London, EC2N 2HA, UnitedKingdom. -->
          </div>
        </li>
        <li class="publicFooter_content_Li_foot">
          Copyright &#169️ TigerBrokers Limited 2022. All rights reserved.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul li {
  list-style: none;
}
.publicFooter {
  width: 100%;
  min-width: 1200px;
  overflow-x: auto;
  // height: 245.5 * 2px;
  background: #191919;
  display: flex;
  justify-content: center;
  .publicFooter_content {
    width: 60%;
    padding-bottom: 30px;
    min-width: 1170px;
    max-width: 1170px;
    ul {
      margin-top: 24.5 * 2px;
      .publicFooter_content_Li {
        margin-bottom: 24px;
        p {
          margin-bottom: 6px;
          color: #d2d2d2;
        }
        div {
          color: #adadad;
        }
      }
      .publicFooter_content_Li_foot{
        font-size: 22px;
        text-align: center;
        color: #ADADAD;
        margin-top: 60px;
      }
    }
  }
}
</style>