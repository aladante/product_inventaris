--
-- Name: location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.location (
    location_id bigint NOT NULL,
    number integer NOT NULL,
    street character varying(255)
);


ALTER TABLE public.location OWNER TO postgres;

--
-- Name: location_location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.location_location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE public.location_location_id_seq OWNER TO postgres;
ALTER SEQUENCE public.location_location_id_seq OWNED BY public.location.location_id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    product_id bigint NOT NULL,
    expire_date date
);
ALTER TABLE public.product OWNER TO postgres;
CREATE SEQUENCE public.product_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE public.product_product_id_seq OWNER TO postgres;
ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;

--
-- Name: product_at_location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_at_location (
    product_at_location_id bigint NOT NULL,
    amount integer NOT NULL,
    created_at timestamp without time zone,
    location_id bigint,
    product_id bigint
);
ALTER TABLE public.product_at_location OWNER TO postgres;
CREATE SEQUENCE public.product_at_location_product_at_location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE public.product_at_location_product_at_location_id_seq OWNER TO postgres;
ALTER SEQUENCE public.product_at_location_product_at_location_id_seq OWNED BY public.product_at_location.product_at_location_id;


ALTER TABLE ONLY public.location ALTER COLUMN location_id SET DEFAULT nextval('public.location_location_id_seq'::regclass);
ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);
ALTER TABLE ONLY public.product_at_location ALTER COLUMN product_at_location_id SET DEFAULT nextval('public.product_at_location_product_at_location_id_seq'::regclass);
--
-- Name: user_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_detail (
    username character varying(255) NOT NULL,
    created_at timestamp without time zone,
    is_admin boolean NOT NULL,
    password character varying(255),
    role_code character varying(255)
);
ALTER TABLE public.user_detail OWNER TO postgres;


ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (location_id);


--
-- Name: product_at_location product_at_location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_at_location
    ADD CONSTRAINT product_at_location_pkey PRIMARY KEY (product_at_location_id);

--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);


--
-- Name: user_detail user_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_detail
    ADD CONSTRAINT user_detail_pkey PRIMARY KEY (username);


--
-- Name: product_at_location fk20mlj6ov6ilju5xnjjajby8t8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_at_location
    ADD CONSTRAINT fk20mlj6ov6ilju5xnjjajby8t8 FOREIGN KEY (product_id) REFERENCES public.product(product_id);


--
-- Name: product_at_location fkmrn31spnyk9be88dfqhh05quv; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_at_location
    ADD CONSTRAINT fkmrn31spnyk9be88dfqhh05quv FOREIGN KEY (location_id) REFERENCES public.location(location_id);

