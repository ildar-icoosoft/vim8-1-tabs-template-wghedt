# vim8-1-tabs-template-wghedt

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vim8-1-tabs-template-wghedt)

### Пример использования компонента

```html
<tabs>
  <tab>
    <tab-title>
      tab title 1
    </tab-title>
    <tab-content>
      tab content 1
    </tab-content>
  </tab>

  <tab>
    <tab-title>
      tab title 2
    </tab-title>
    <tab-content>
      <!-- Ленивая загрузка -->
      <ng-template lazyTabContent>
        <div>
          tab content 2
          <test [tab]="2"></test>
        </div>
      </ng-template>
    </tab-content>
  </tab>

  <tab>
    <tab-title>
      tab title 3
    </tab-title>
    <tab-content>
      <!-- Ленивая загрузка. Альтернативный синтаксис -->
      <div *lazyTabContent>
        tab content 3
        <test [tab]="3"></test>
      </div>
    </tab-content>
  </tab>
</tabs>
```
