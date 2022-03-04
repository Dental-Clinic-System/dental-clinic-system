# Dental clinic system :grin:

## Set up :computer:

---
</br>

> ### `Clone project`
```zsh
git clone git@github.com:Ermuun-Orgil/dental-clinic-system.git
```

> ### `Code structure`
```js
├─ dental-front
│   ├─ public
│   ├─ src
│   │   ├─ components
│   │   ├─ content
│   │   ├─ contexts
│   │   ├─ layouts
│   │   ├─ theme
│   │   ├─ utils
│   │   ├─ router.tsx
│   │   ├─ App.tsx
│   │   └─ index.tsx
│   ├─ .babelrc
│   ├─ .editorconfig
│   ├─ .gitignore
│   ├─ .prettierignore
│   ├─ .prettierrc
│   ├─ package.json
│   ├─ README.md
│   └─ tsconfig.json
│   └─ tslint.json
│   └─ yarn.lock
├─ dental-back
```

> ### `Start development server`
```zsh
cd dental-clinic-system
cd dental-front
yarn `or` yarn install
yarn start
```

A development server has started on http://localhoost:3000 now.

---

## Merge your code to main branch :evergreen_tree:

</br>

> ### `Merge`
#### Normally push to main branch not allowed. You have to create branch and send pull-request.

</br>

> ### `Generate build bundle`
```
yarn build
```

Run this command from dental-front folder.