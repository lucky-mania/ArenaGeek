# Pasta de Imagens - Arena Geek

## Como adicionar imagens aos produtos:

1. **Coloque suas imagens nesta pasta** (`images/`)
2. **Dê nomes descritivos** para as imagens (ex: `caneca-naruto.jpg`, `figura-goku.png`)
3. **Vá ao arquivo `config.js`**
4. **Encontre o produto que quer alterar**
5. **Substitua a URL no campo `imageUrl`** pela sua imagem:
   ```javascript
   imageUrl: "images/sua-imagem.jpg"
   ```

## Exemplo:
```javascript
{
    id: 1,
    name: "Caneca Naruto Hokage",
    // ... outros campos
    imageUrl: "images/caneca-naruto.jpg", // ← Sua imagem aqui
}
```

## Formatos suportados:
- JPG/JPEG
- PNG
- GIF
- WEBP

## Dicas:
- Use imagens quadradas para melhor visual (300x300px ou maior)
- Mantenha os arquivos com tamanho razoável (até 1MB por imagem)
- Use nomes sem espaços e caracteres especiais