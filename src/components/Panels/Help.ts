import * as BUI from "@thatopen/ui";
import i18next from "i18next";

export default BUI.Component.create<BUI.Panel>(() => {
  console.log('Rendering Help component');
  console.log('Current language:', i18next.language);

  const changeLanguage = (lang: string) => {
    console.log('Changing language to:', lang);
    i18next.changeLanguage(lang);
  };

  // Debug: Log translation values
  console.log('languageChangeLabel:', i18next.t('global:help.languageChangeLabel'));
  console.log('thatOpenPeopleLabel:', i18next.t('global:help.thatOpenPeopleLabel'));

  return BUI.html`
    <bim-panel>
      <bim-panel-section fixed label="${i18next.t('global:help.languageChangeLabel')}" icon="mdi:translate">
        <bim-button @click=${() => changeLanguage('en')} label="English"></bim-button>
        <bim-button @click=${() => changeLanguage('es')} label="Español"></bim-button>
      </bim-panel-section>

      <bim-panel-section fixed label="${i18next.t('global:help.thatOpenPeopleLabel')}" icon="ic:baseline-people">
        <bim-label style="white-space: normal;">
          ${i18next.t('global:help.thatOpenPeopleDescription')}
        </bim-label>
        <bim-button 
          @click=${() => open("https://people.thatopen.com/")} 
          label="${i18next.t('global:help.thatOpenPeopleButton')}" 
          icon="ic:baseline-people"
        ></bim-button>
      </bim-panel-section>

      <bim-panel-section fixed label="${i18next.t('global:help.becomeDeveloperLabel')}" icon="mdi:university">
        <bim-label style="white-space: normal;">
          ${i18next.t('global:help.becomeDeveloperDescription')}
        </bim-label>
        <bim-button 
          @click=${() => open("https://thatopen.com/master")} 
          label="${i18next.t('global:help.becomeDeveloperButton')}" 
          icon="mdi:university"
        ></bim-button>
      </bim-panel-section>

      <bim-panel-section fixed label="${i18next.t('global:help.getCodeLabel')}" icon="material-symbols:code">
        <bim-label style="white-space: normal;">
          ${i18next.t('global:help.getCodeDescription')}
        </bim-label>
        <bim-button 
          @click=${() => open("https://thatopen.com/get-the-code")} 
          label="${i18next.t('global:help.getCodeButton')}" 
          icon="material-symbols:code"
        ></bim-button>
      </bim-panel-section>
    </bim-panel>
  `;
});