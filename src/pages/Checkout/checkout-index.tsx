//arquivo para área de checkout da página.
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { clear } from '../../store/reducers/cart'
import { open } from '../../store/reducers/cart'
import * as S from './checkout-styles'

//Const Principal.
const Checkout = ({ onClose }: { onClose: () => void }) => {
  const [payMethod, setPayMethod] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const navigate = useNavigate()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  //Configuração do formik para validação de formulários. OBS: Instalar as dependências "npm install --save yup formik".
  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      fullComplemento: '',
      cardOwner: '',
      numbCard: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      //dados do cliente
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .length(10, 'O campo precisa ter 10 caracteres')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      fullComplemento: Yup.string(),

      //Dados do cartão de pagamento
      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .when((values, schema) =>
          payMethod ? schema.required('O campo é obrigatorio') : schema
        ),
      numbCard: Yup.string().when((values, schema) =>
        payMethod ? schema.required('O campo é obrigatorio') : schema
      ),
      cardCode: Yup.string()
        .max(3, 'São permitidos até 3 dígitos')
        .when((values, schema) =>
          payMethod ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresMonth: Yup.string().when((values, schema) =>
        payMethod ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payMethod ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.fullComplemento
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.numbCard,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  //função para marcação de inputs com erro.
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  //função de checagem dos inputs de entrega.
  const checkAdressInputs = () => {
    form.setTouched({
      fullName: true,
      endereco: true,
      cidade: true,
      cep: true,
      numero: true,
      cardOwner: true,
      numbCard: true,
      cardCode: true,
      expiresMonth: true,
      expiresYear: true
    })

    //função para verificar erros e inputs vazios
    const isValidInputs =
      !form.errors.fullName &&
      !form.errors.endereco &&
      !form.errors.cidade &&
      !form.errors.cep &&
      !form.errors.numero &&
      form.values.fullName !== '' &&
      form.values.endereco !== '' &&
      form.values.cidade !== '' &&
      form.values.cep !== '' &&
      form.values.numero !== ''

    if (isValidInputs) {
      setPayMethod(true)
    }
  }

  //Recurso para limpar o cart após a finalização da compra
  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  //funções de aprimoramento de carragamento da página
  const openCart = () => {
    dispatch(open())
  }

  const isCompleted = () => {
    setIsOpenCart(true)
    onClose()
    navigate('/')
  }

  const isReturn = () => {
    setIsOpenCart(true)
    onClose()
    openCart()
  }

  //redirecionamento para a página inicial se não tiver itens no carrinho.
  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return <div className="container"></div>
}

//Exportações.
export default Checkout
