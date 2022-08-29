export default {
  extensions: {
    Blockquote: {
      buttons: {
        blockquote: {
          tooltip: 'Idézet blokk'
        }
      }
    },
    Bold: {
      buttons: {
        bold: {
          tooltip: 'Félkövér'
        }
      }
    },
    BulletList: {
      buttons: {
        bulletList: {
          tooltip: 'Rendezetlen lista'
        }
      }
    },
    Code: {
      buttons: {
        code: {
          tooltip: 'Kód'
        }
      }
    },
    CodeBlock: {
      buttons: {
        codeBlock: {
          tooltip: 'Kód blokk'
        }
      }
    },
    History: {
      buttons: {
        undo: {
          tooltip: 'Visszavonás'
        },
        redo: {
          tooltip: 'Ismét'
        }
      }
    },
    HorizontalRule: {
      buttons: {
        horizontalRule: {
          tooltip: 'Vízszintes vonal'
        }
      }
    },
    Italic: {
      buttons: {
        italic: {
          tooltip: 'Dőlt'
        }
      }
    },
    OrderedList: {
      buttons: {
        orderedList: {
          tooltip: 'Rendezett lista'
        }
      }
    },
    Paragraph: {
      buttons: {
        paragraph: {
          tooltip: 'Bekezdés'
        }
      }
    },
    Strike: {
      buttons: {
        strike: {
          tooltip: 'Áthúzott'
        }
      }
    },
    Underline: {
      buttons: {
        underline: {
          tooltip: 'Aláhúzott'
        }
      }
    },
    Heading: {
      buttons: {
        heading: {
          tooltip: ({ level }) => level + '. szintű fejléc'
        }
      }
    },
    Link: {
      buttons: {
        isActive: {
          tooltip: 'Link megváltoztatása'
        },
        notActive: {
          tooltip: 'Link felvétele'
        }
      },
      window: {
        title: 'Link beállításai',
        form: {
          hrefLabel: 'URL'
        },
        buttons: {
          close: 'Bezár',
          remove: 'Elvátolít',
          apply: 'Elfogad'
        }
      }
    },
    Image: {
      buttons: {
        tooltip: 'Kép'
      },
      window: {
        title: 'Kép hozzáadása',
        form: {
          sourceLink: 'Kép URL',
          altText: 'Alternatív szöveg',
          addImage: 'Kép hozzáadása'
        },
        imageUpload: {
          instruction: 'Válassz fájl(oka)t vagy húzd őket ide.'
        },
        buttons: {
          close: 'Bezár',
          apply: 'Elfogad'
        }
      }
    },
    TodoList: {
      buttons: {
        todoList: {
          tooltip: 'Teendők lista'
        }
      }
    }
  }
}



